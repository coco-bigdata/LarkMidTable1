package com.larkmidtable.admin.service;

import com.larkmidtable.admin.dto.FlinkXJsonBuildDto;

/**
 * com.larkmidtable json构建服务层接口
 *
 * @author zhouhongfa@gz-yibo.com
 * @version 1.0
 * @since 2019/8/1
 */
public interface FlinkxJsonService {

    /**
     * build flinkx json
     *
     * @param dto
     * @return
     */
    String buildJobJson(FlinkXJsonBuildDto dto);
}
