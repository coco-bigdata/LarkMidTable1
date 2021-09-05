#!/bin/bash

pid=$(ps -ef | grep "flinkx-admin" | grep -v grep | awk '{print $2}')
kill -15 $pid
echo "flinkx-admin的进程已经停止!!!!"

pid=$(ps -ef | grep "flinkx-executor" | grep -v grep | awk '{print $2}')
kill -15 $pid
echo "flinkx-executor的进程已经停止!!!!"