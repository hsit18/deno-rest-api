interface IUser {
  id: number;
  name: string;
  email: string;
}

const users: Array<IUser> = [
  {
    id: 1,
    name: "Harpreet Singh",
    email: "test@test.com",
  },
  {
    id: 2,
    name: "Test User",
    email: "user1@test.com",
  },
  {
    id: 1,
    name: "Kent Dodd",
    email: "kent@test.com",
  },
];

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

export { getUsers };
