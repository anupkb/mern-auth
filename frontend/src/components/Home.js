import React from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    gender: "Male",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "987-654-3210",
    gender: "Female",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "555-555-5555",
    gender: "Female",
  },
  {
    id: 4,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "111-222-3333",
    gender: "Male",
  },
  {
    id: 5,
    name: "Emily Brown",
    email: "emily@example.com",
    phone: "444-444-4444",
    gender: "Female",
  },
  {
    id: 6,
    name: "David Wilson",
    email: "david@example.com",
    phone: "777-777-7777",
    gender: "Male",
  },
  {
    id: 7,
    name: "Sarah Taylor",
    email: "sarah@example.com",
    phone: "888-888-8888",
    gender: "Female",
  },
  {
    id: 8,
    name: "John River",
    email: "john@example.com",
    phone: "800-788-8688",
    gender: "Male",
  },
  {
    id: 9,
    name: "Sam Williams",
    email: "sam@example.com",
    phone: "809-818-3518",
    gender: "Male",
  },
  {
    id: 10,
    name: "Bill Smith",
    email: "bill@example.com",
    phone: "098-888-8148",
    gender: "Male",
  },
  {
    id: 11,
    name: "Olivia Davis",
    email: "olivia@example.com",
    phone: "111-222-3333",
    gender: "Female",
  },
  {
    id: 12,
    name: "Ethan Martinez",
    email: "ethan@example.com",
    phone: "444-555-6666",
    gender: "Male",
  },
  {
    id: 13,
    name: "Ava Perez",
    email: "ava@example.com",
    phone: "777-888-9999",
    gender: "Female",
  },
  {
    id: 14,
    name: "Noah Thompson",
    email: "noah@example.com",
    phone: "111-222-3333",
    gender: "Male",
  },
  {
    id: 15,
    name: "Emma White",
    email: "emma@example.com",
    phone: "444-555-6666",
    gender: "Female",
  },
  {
    id: 16,
    name: "Liam Harris",
    email: "liam@example.com",
    phone: "777-888-9999",
    gender: "Male",
  },
  {
    id: 17,
    name: "Isabella Martin",
    email: "isabella@example.com",
    phone: "888-999-1111",
    gender: "Female",
  },
  {
    id: 18,
    name: "Mason Thompson",
    email: "mason@example.com",
    phone: "111-222-3333",
    gender: "Male",
  },
  {
    id: 19,
    name: "Sophia Hernandez",
    email: "sophia@example.com",
    phone: "444-555-6666",
    gender: "Female",
  },
  {
    id: 20,
    name: "James Garcia",
    email: "james@example.com",
    phone: "777-888-9999",
    gender: "Male",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-600 mb-2">{user.phone}</p>
            <p className="text-gray-600">{user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
