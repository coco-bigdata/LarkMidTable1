package com.larkmidtable.admin.entity;

import lombok.Data;

import java.util.Date;

@Data
public class JobLogReport {

    private int id;

    private Date triggerDay;

    private int runningCount;
    private int sucCount;
    private int failCount;
}
