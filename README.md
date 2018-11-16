Mock LDAP server using [this node module](https://github.com/veo-labs/ldap-server-mock).

Use the following commands to copy conf.json and users.json into /tmp directory:
```
cp conf.json /tmp/ldap-conf.json
cp users.json /tmp/users.json
```

Run the following command on the terminal to start the ldap server: `npm run mock`

An example of an ldapsearch command:

`ldapsearch -H ldap://localhost:1389 -x -b dc=test objectclass=*`