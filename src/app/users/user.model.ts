// Modelado de los usarios
enum ROLESUSER {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer"
};

export interface UserApp {
  id: string | number,
  username: string,
  role: ROLESUSER // <-- asignacion de un enum
};
