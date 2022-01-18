package com.larkmidtable.admin.tool.flinkx;

import com.larkmidtable.admin.tool.pojo.FlinkxHbasePojo;
import com.larkmidtable.admin.tool.pojo.FlinkxHivePojo;
import com.larkmidtable.admin.tool.pojo.FlinkxMongoDBPojo;
import com.larkmidtable.admin.tool.pojo.FlinkxRdbmsPojo;

import java.util.Map;

/**
 * 插件基础接口
 *
 * @author zhouhongfa@gz-yibo.com
 * @ClassName FlinkxPluginInterface
 * @Version 1.0
 * @since 2019/7/30 22:59
 */
public interface FlinkxPluginInterface {
    /**
     * 获取reader插件名称
     *
     * @return
     */
    String getName();

    /**
     * 构建
     *
     * @return flinkxPluginPojo
     */
    Map<String, Object> build(FlinkxRdbmsPojo flinkxPluginPojo);


    /**
     * hive json构建
     * @param flinkxHivePojo
     * @return
     */
    Map<String, Object> buildHive(FlinkxHivePojo flinkxHivePojo);

    /**
     * hbase json构建
     * @param flinkxHbasePojo
     * @return
     */
    Map<String, Object> buildHbase(FlinkxHbasePojo flinkxHbasePojo);

    /**
     * mongodb json构建
     * @param flinkxMongoDBPojo
     * @return
     */
    Map<String,Object> buildMongoDB(FlinkxMongoDBPojo flinkxMongoDBPojo);

    /**
     * 获取示例
     *
     * @return
     */
    Map<String, Object> sample();
}
