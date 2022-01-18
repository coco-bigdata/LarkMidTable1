package com.lark.example;

import com.ververica.cdc.connectors.mysql.MySqlSource;
import com.ververica.cdc.connectors.mysql.table.StartupOptions;
import com.ververica.cdc.debezium.DebeziumSourceFunction;
import com.ververica.cdc.debezium.StringDebeziumDeserializationSchema;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;

/**
 *
 *
 * @Date: 2022/1/15 10:45
 * @Description:
 * @Author: LarkMidTable
 **/
public class FlinkCDCSQL {

	public static void main(String[] args) throws Exception {
		// 1.设置流的环境
		StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
//		// 2.设置并行度
		env.setParallelism(1);
		StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

		//2.创建 Flink-MySQL-CDC 的 Source
		tableEnv.executeSql("CREATE TABLE student2 (" +
				" id STRING," +
				" name STRING," +
				" address STRING" +
				") WITH (" +
				" 'connector' = 'mysql-cdc'," +
				" 'scan.startup.mode' = 'latest-offset'," +
				" 'scan.incremental.snapshot.enabled' = 'false'," +
				" 'hostname' = 'localhost'," +
				" 'port' = '3306'," +
				" 'username' = 'root'," +
				" 'password' = 'root'," +
				" 'database-name' = 'test'," +
				" 'table-name' = 'student'" +
				")");
		tableEnv.executeSql("select * from student2").print();
		env.execute();
	}
}
