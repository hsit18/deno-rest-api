interface IUser {
  id: string;
  name: string;
  email: string;
}

let users: Array<IUser> = [
  {
    id: "1",
    name: "Harpreet Singh",
    email: "test@test.com",
  },
  {
    id: "2",
    name: "Test User",
    email: "user1@test.com",
  },
  {
    id: "3",
    name: "Kent Dodd",
    email: "kent@test.com",
  },
];

export const defaultResponse = ({ response }: { response: any }) => {
  response.body = "deno server is running...";
};

const getUserById = (id: string): any => users.find((u: IUser) => u.id === id);

export const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

export const getUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const user: IUser | undefined = getUserById(params.id);
  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: `User not found.` };
  }
};

export const addUser = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  users.push(body.value);
  response.body = { message: "OK" };
  response.status = 200;
};

export const updateUser = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  let user: IUser = getUserById(params.id);
  if (users) {
    const body = await request.body();

    user = { ...user, ...body.value };
    users = [...(users.filter((u: IUser) => u.id !== params.id) || []), user];
    response.status = 200;
    response.body = { message: "OK" };
  } else {
    response.status = 404;
    response.body = { message: `User not found` };
  }
};

export const deleteUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  users = users.filter((u: IUser) => u.id !== params.id);
  response.body = { message: "OK" };
  response.status = 200;
};
