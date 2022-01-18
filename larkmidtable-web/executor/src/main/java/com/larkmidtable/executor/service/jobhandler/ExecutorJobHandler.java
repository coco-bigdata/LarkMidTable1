package com.larkmidtable.executor.service.jobhandler;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import com.larkmidtable.executor.service.logparse.LogStatistics;
import com.larkmidtable.core.biz.model.HandleProcessCallbackParam;
import com.larkmidtable.core.biz.model.ReturnT;
import com.larkmidtable.core.biz.model.TriggerParam;
import com.larkmidtable.core.handler.IJobHandler;
import com.larkmidtable.core.handler.annotation.JobHandler;
import com.larkmidtable.core.log.JobLogger;
import com.larkmidtable.core.thread.ProcessCallbackThread;
import com.larkmidtable.core.util.ProcessUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.concurrent.FutureTask;

import static com.larkmidtable.executor.service.command.BuildCommand.buildFlinkXExecutorCmd;
import static com.larkmidtable.executor.service.logparse.AnalysisStatistics.analysisStatisticsLog;



@JobHandler(value = "executorJobHandler")
@Component
public class ExecutorJobHandler extends IJobHandler {

	@Value("${flinkx.executor.jsonpath}")
	private String jsonPath;

	@Value("${flinkx.shell.path}")
	private String flinkXShPath;

	private static final Logger LOGGER = LoggerFactory.getLogger(ExecutorJobHandler.class);

	@Override
	public ReturnT<String> execute(TriggerParam trigger) {

		int exitValue = -1;
		Thread errThread = null;
		String tmpFilePath;
		LogStatistics logStatistics = null;
		// Generate JSON temporary file
		tmpFilePath = generateTemJsonFile(trigger.getJobJson());

		try {
			String[] cmdarrayFinal = buildFlinkXExecutorCmd(trigger, tmpFilePath, flinkXShPath);
			String cmdstr = "";
			for (int i =0;i<cmdarrayFinal.length;i++) {
				cmdstr+=cmdarrayFinal[i]+ " ";
			}

			final Process process = Runtime.getRuntime().exec(cmdstr);
			String prcsId = ProcessUtil.getProcessId(process);
			JobLogger.log("------------------FlinkX process id: " + prcsId);
			jobTmpFiles.put(prcsId, tmpFilePath);
			// update flinkx process id
			HandleProcessCallbackParam prcs = new HandleProcessCallbackParam(trigger.getLogId(),
					trigger.getLogDateTime(), prcsId);
			ProcessCallbackThread.pushCallBack(prcs);
			// log-thread
			Thread futureThread = null;
			FutureTask<LogStatistics> futureTask = new FutureTask<>(
					() -> analysisStatisticsLog(new BufferedInputStream(process.getInputStream())));
			futureThread = new Thread(futureTask);
			futureThread.start();

			errThread = new Thread(() -> {
				try {
					analysisStatisticsLog(new BufferedInputStream(process.getErrorStream()));
				} catch (IOException e) {
					JobLogger.log(e);
				}
			});

			logStatistics = futureTask.get();
			errThread.start();
			// process-wait
			exitValue = process.waitFor(); // exit code: 0=success, 1=error
			// log-thread join
			errThread.join();
		} catch (Exception e) {
			JobLogger.log(e);
		} finally {
			if (errThread != null && errThread.isAlive()) {
				errThread.interrupt();
			}
			// 删除临时文件
			if (FileUtil.exist(tmpFilePath)) {
				FileUtil.del(new File(tmpFilePath));
			}
		}
		if (exitValue == 0) {
			return new ReturnT<>(200, logStatistics.toString());
		} else {
			return new ReturnT<>(IJobHandler.FAIL.getCode(), "command exit value(" + exitValue + ") is failed");
		}
	}


	private String generateTemJsonFile(String jobJson) {
		String tmpFilePath;
//		String FlinkXHomePath = SystemUtils.getFlinkxHomePath();
//		if (StringUtils.isNotEmpty(FlinkXHomePath)) {
//			jsonPath = FlinkXHomePath + DEFAULT_JSON;
//		}
		if (!FileUtil.exist(jsonPath)) {
			FileUtil.mkdir(jsonPath);
		}
		tmpFilePath = jsonPath + "jobTmp-" + IdUtil.simpleUUID() + ".json";
		// 根据json写入到临时本地文件
		try (PrintWriter writer = new PrintWriter(tmpFilePath, "UTF-8")) {
			writer.println(jobJson);
		} catch (FileNotFoundException | UnsupportedEncodingException e) {
			JobLogger.log("JSON 临时文件写入异常：" + e.getMessage());
		}
		return tmpFilePath;
	}

}
