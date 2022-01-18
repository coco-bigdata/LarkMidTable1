package com.larkmidtable.admin.tool.flinkx.writer;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Maps;
import com.larkmidtable.admin.util.AESUtil;
import com.larkmidtable.admin.tool.flinkx.BaseFlinkxPlugin;
import com.larkmidtable.admin.tool.pojo.FlinkxHbasePojo;
import com.larkmidtable.admin.tool.pojo.FlinkxHivePojo;
import com.larkmidtable.admin.tool.pojo.FlinkxMongoDBPojo;
import com.larkmidtable.admin.tool.pojo.FlinkxRdbmsPojo;
import com.larkmidtable.core.util.Constants;
import com.larkmidtable.admin.entity.JobDatasource;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * flinkx writer base
 *
 * @author zhouhongfa@gz-yibo.com
 * @ClassName BaseWriterPlugin
 * @Version 1.0
 * @since 2019/8/2 16:28
 */
public abstract class BaseWriterPlugin extends BaseFlinkxPlugin {
    @Override
    public Map<String, Object> build(FlinkxRdbmsPojo plugin) {
        Map<String, Object> writerObj = Maps.newLinkedHashMap();
        writerObj.put("name", getName());

        Map<String, Object> parameterObj = Maps.newLinkedHashMap();
//        parameterObj.put("writeMode", "insert");
        JobDatasource jobDatasource = plugin.getJobDatasource();
        parameterObj.put("username", AESUtil.decrypt(jobDatasource.getJdbcUsername()));
        parameterObj.put("password", AESUtil.decrypt(jobDatasource.getJdbcPassword()));
		//类型
        parameterObj.put("writeMode", "insert");
		parameterObj.put("column", plugin.getRdbmsColumns());
        parameterObj.put("preSql", splitSql(plugin.getPreSql()));
        parameterObj.put("postSql", splitSql(plugin.getPostSql()));

        Map<String, Object> connectionObj = Maps.newLinkedHashMap();
        connectionObj.put("table", plugin.getTables());
        connectionObj.put("jdbcUrl", jobDatasource.getJdbcUrl());

        parameterObj.put("connection", ImmutableList.of(connectionObj));
        writerObj.put("parameter", parameterObj);

        return writerObj;
    }

    private String[] splitSql(String sql) {
        String[] sqlArr = null;
        if (StringUtils.isNotBlank(sql)) {
            Pattern p = Pattern.compile("\r\n|\r|\n|\n\r");
            Matcher m = p.matcher(sql);
            String sqlStr = m.replaceAll(Constants.STRING_BLANK);
            sqlArr = sqlStr.split(Constants.SPLIT_COLON);
        }
        return sqlArr;
    }

    @Override
    public Map<String, Object> buildHive(FlinkxHivePojo flinkxHivePojo) {
        return null;
    }


    @Override
    public Map<String, Object> buildHbase(FlinkxHbasePojo flinkxHbasePojo) {
        return null;
    }

    @Override
    public Map<String, Object> buildMongoDB(FlinkxMongoDBPojo plugin) {
        return null;
    }
}
