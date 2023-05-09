// Enum - Define un conjunto de variables
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer"
};

type User = {
  username: string,
  role: ROLES // <-- asignacion de un enum
};

const dibotUser: User = {
  username: "dibot",
  role: ROLES.ADMIN // <-- asignacion del ROL
};
