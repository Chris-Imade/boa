export default {
    name: 'user',
    type: 'document',
      title: 'User',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID'
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
      },
      {
        name:"photo",
        type: "image",
        title: "Profile Photo",
        options: {
            hotspot: true
        }
      },
      {
        name: "accountBalance",
        type: "string",
        title: "Account Balance",
      },
    ]
  }