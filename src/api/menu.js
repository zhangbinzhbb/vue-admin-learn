import request from '@/utils/request';

/**
 * 获取菜单左侧列表权限
 */
export function getMenu() {
  return request({
    url: '/vue-antd-admin/menu/list',
    method: 'get'
  });
}

/**
 * 更新菜单左侧列表权限
 */
export function updateMenu(data) {
  return request({
    url: `/vue-antd-admin/menu/list/update`,
    method: 'post',
    data
  });
}
