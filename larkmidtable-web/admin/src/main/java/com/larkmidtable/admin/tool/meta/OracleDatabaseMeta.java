package com.larkmidtable.admin.tool.meta;
/**
 * Oracle数据库 meta信息查询
 *
 * @author zhouhongfa@gz-yibo.com
 * @ClassName MySQLDatabaseMeta
 * @Version 1.0
 * @since 2019/7/17 15:48
 */
public class OracleDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {

    private volatile static OracleDatabaseMeta single;

    public static OracleDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (OracleDatabaseMeta.class) {
                if (single == null) {
                    single = new OracleDatabaseMeta();
                }
            }
        }
        return single;
    }


    @Override
    public String getSQLQueryComment(String schemaName, String tableName, String columnName) {
        return String.format("select B.comments \n" +
                "  from sys.dba_tab_columns A, sys.dba_col_comments B\n" +
                " where a.COLUMN_NAME = b.column_name\n" +
                "   and A.Table_Name = B.Table_Name\n" +
                "   and A.Table_Name = upper('%s')\n" +
                "   AND A.column_name  = '%s'", tableName, columnName);
    }

    @Override
    public String getSQLQueryPrimaryKey() {
        return "select cu.column_name from sys.dba_cons_columns cu, sys.dba_constraints au where cu.constraint_name = au.constraint_name and au.owner = ? and au.constraint_type = 'P' and au.table_name = ?";
    }

    @Override
    public String getSQLQueryTablesNameComments() {
        return "select distinct owner||'.'||table_name,comments from sys.dba_tab_comments";
    }

    @Override
    public String getSQLQueryTableNameComment() {
        return "select distinct owner||'.'||table_name,comments from sys.dba_tab_comments where table_name = ?";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        return "select distinct owner||'.'||table_name from sys.dba_tables where owner='" + tableSchema[0] + "'";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {

        return "select distinct username from sys.dba_users";

    }


    @Override
    public String getSQLQueryTables() {
        return "select table_name from user_tab_comments";
    }

    @Override
    public String getSQLQueryColumns(String... args) {
        return "select table_name,comments from user_tab_comments where table_name = ? and ";
    }
}
