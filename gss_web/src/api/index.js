import request from '@/utils/request'


//获取公司历程列表
export function getDevelopHistoryList() {
    return request({
        method: 'get',
        params:{
        	method:'develop_history_list'
        }
    })
}
//获取招聘人员岗位列表
export function getJobList() {
    return request({
        method: 'get',
        params:{
        	method:'job_post_list'
        }
    })
}