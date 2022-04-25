export const allRoles = {
  user: [] as any[],
  admin: ['getUsers', 'manageUsers'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));

export default {
  roles,
  roleRights,
};
