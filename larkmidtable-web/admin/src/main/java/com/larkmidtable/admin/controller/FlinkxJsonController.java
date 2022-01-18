package com.larkmidtable.admin.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.larkmidtable.admin.dto.FlinkXJsonBuildDto;
import com.larkmidtable.admin.service.FlinkxJsonService;
import com.larkmidtable.admin.core.util.I18nUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @Author: LarkMidTable
 * @Date: 2020/9/16 11:14
 * @Description: 组装flinkx的json的控制器
 **/
@RestController
@RequestMapping("api/flinkxJson")
@Api(tags = "组装flinkx  json的控制器")
public class FlinkxJsonController extends BaseController {

    @Autowired
    private FlinkxJsonService flinkxJsonService;


    @PostMapping("/buildJson")
    @ApiOperation("JSON构建")
    public R<String> buildJobJson(@RequestBody FlinkXJsonBuildDto dto) {
        String key = "system_please_choose";
        if (dto.getReaderDatasourceId() == null) {
            return failed(I18nUtil.getString(key) + I18nUtil.getString("jobinfo_field_readerDataSource"));
        }
        if (dto.getWriterDatasourceId() == null) {
            return failed(I18nUtil.getString(key) + I18nUtil.getString("jobinfo_field_writerDataSource"));
        }
        if (CollectionUtils.isEmpty(dto.getReaderColumns())) {
            return failed(I18nUtil.getString(key) + I18nUtil.getString("jobinfo_field_readerColumns"));
        }
        if (CollectionUtils.isEmpty(dto.getWriterColumns())) {
            return failed(I18nUtil.getString(key) + I18nUtil.getString("jobinfo_field_writerColumns"));
        }
        return success(flinkxJsonService.buildJobJson(dto));
    }

}
