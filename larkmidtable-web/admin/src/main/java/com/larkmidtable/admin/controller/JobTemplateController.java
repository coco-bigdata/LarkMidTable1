package com.larkmidtable.admin.controller;


import com.larkmidtable.admin.entity.JobTemplate;
import com.larkmidtable.admin.service.JobTemplateService;
import com.larkmidtable.admin.core.cron.CronExpression;
import com.larkmidtable.admin.core.util.I18nUtil;
import com.larkmidtable.core.biz.model.ReturnT;
import com.larkmidtable.core.util.DateUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;


/**
 *
 * @Author: LarkMidTable
 * @Date: 2020/9/16 11:14
 * @Description: 任务模板
 **/
@RestController
@RequestMapping("/api/jobTemplate")
@Api(tags = "任务配置接口")
public class JobTemplateController extends BaseController{

    @Resource
    private JobTemplateService jobTemplateService;

    @GetMapping("/pageList")
    @ApiOperation("任务模板列表")
    public ReturnT<Map<String, Object>> pageList(@RequestParam(value = "current", required = false, defaultValue = "0") int current,
                                        @RequestParam(value = "size", required = false, defaultValue = "10") int size,
                                                 @RequestParam(value = "jobGroup") int jobGroup, @RequestParam(value = "jobDesc") String jobDesc,
                                                 @RequestParam(value = "executorHandler") String executorHandler,
                                                 @RequestParam(value = "userId") int userId) {
		Integer[] projectIds =new Integer[0];
        return new ReturnT<>(jobTemplateService.pageList((current-1)*size, size, jobGroup, jobDesc, executorHandler, userId, projectIds));
    }

    @PostMapping("/add")
    @ApiOperation("添加任务模板")
    public ReturnT<String> add(HttpServletRequest request, @RequestBody JobTemplate jobTemplate) {
        jobTemplate.setUserId(getCurrentUserId(request));
        return jobTemplateService.add(jobTemplate);
    }

    @PostMapping("/update")
    @ApiOperation("更新任务")
    public ReturnT<String> update(HttpServletRequest request,@RequestBody JobTemplate jobTemplate) {
        jobTemplate.setUserId(getCurrentUserId(request));
        return jobTemplateService.update(jobTemplate);
    }

    @PostMapping(value = "/remove/{id}")
    @ApiOperation("移除任务模板")
    public ReturnT<String> remove(@PathVariable(value = "id") int id) {
        return jobTemplateService.remove(id);
    }

    @GetMapping("/nextTriggerTime")
    @ApiOperation("获取近5次触发时间")
    public ReturnT<List<String>> nextTriggerTime(String cron) {
        List<String> result = new ArrayList<>();
        try {
            CronExpression cronExpression = new CronExpression(cron);
            Date lastTime = new Date();
            for (int i = 0; i < 5; i++) {
                lastTime = cronExpression.getNextValidTimeAfter(lastTime);
                if (lastTime != null) {
                    result.add(DateUtil.formatDateTime(lastTime));
                } else {
                    break;
                }
            }
        } catch (ParseException e) {
            return new ReturnT<>(ReturnT.FAIL_CODE, I18nUtil.getString("jobinfo_field_cron_invalid"));
        }
        return new ReturnT<>(result);
    }
}
