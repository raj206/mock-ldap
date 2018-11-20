# Mock LDAP server

Mock LDAP server using [this node module](https://github.com/veo-labs/ldap-server-mock).

> This only works on bind and search operations.

1. Clone the repo using the following command:
`git clone https://github.com/raj206/mock-ldap`

2. Use the following commands to copy conf.json and users.json into /tmp directory:
```
cp conf.json /tmp/ldap-conf.json
cp users.json /tmp/users.json
```

3. Run the following command on the terminal to start the ldap server: 
```
npm install
npm run mock
```

An example of an ldapsearch command:

`ldapsearch -H ldap://localhost:1389 -x -b dc=test objectclass=*`
