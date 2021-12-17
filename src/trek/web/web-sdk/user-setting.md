# User Setting

By sending user's info to AotterTrek, our system will analyze data and optimize the ad content delivering to your application. To channel them into ads they are interested in.

### Sample Code

```markup
<script>
  AotterTrek('setUser', {
    hashedEmail:
      '0b9e5c891bdea5395fc69ca88206b92d723eddb228fe65f63e1945067484bfda',
    hashedPhone:
      '20faf05baccf8a477fa337b77c0acb0e8bff77f34664feec6a057bd3cf23235b',
    birthYear: '1999',
    gender: 'MALE',
  })
  
  AotterTrek('send')
</script>
```

We provide the following attributes. Except for the marked ones, all of the data will be **hashed** before send to AotterTrek server.

| Key            | Guidelines                                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`        | Trim leading and trailing white space, and convert all characters to lowercase.                                                                                                              |
| `hashedEmail ` | Trim leading and trailing white space and convert all characters to lowercase. You should hash it with sha256, **Trek won't be hashed again.**                                               |
| `phone`        | Remove symbols, letters, and any leading zeroes. You should prefix the country code if the`country`field is not specified.                                                                   |
| `hashedPhone ` | Remove symbols, letters, and any leading zeroes. You should prefix the country code if the `country` field is not specified. You should hash it with sha256, **Trek won't be hashed again.** |
| `gender`       | Use _**m** _for male, _**f**_ for female.                                                                                                                                                    |
| `birthYear`    | Use the _YYYY_ format: 1900 to the current year.                                                                                                                                             |
| `birthMonth`   | Use the _MM_ format: `01` to `12`.                                                                                                                                                           |
| `birthDate`    | Use the _DD_ format: `01` to `31`.                                                                                                                                                           |
| `country`      |                                                                                                                                                                                              |
| `city`         |                                                                                                                                                                                              |
| `state`        |                                                                                                                                                                                              |
| `zip`          |                                                                                                                                                                                              |
| `fbId  `       | **Trek won't be hashed this attribute.**                                                                                                                                                     |

### Test Result

![](https://previews.dropbox.com/p/thumb/ABZCW6VeHJ4rssvCJGBqyv_Q6iKJseutY1pI0Q2EZihyZI5TolPZqBd-ZLlG6f2a_C1iw61H8-LNkc04xXC7ljgMY08nclEEbk2hDg8Wm3eOXJSwOMTYJfkNtZu1hyVkFRO8z6H-GFGYdS6WRU0QITZEioaQ_HE0kM22GgjzKBMu-eoyKZ53-GkOPDbSK4TALf0iN6_rUi67IpVfMsSqbx0oH6EIz_TBlZhB2eZMTmaWCkS0Ao4hiS_A0VJjQs2S5CJCSRFBxAoyCySs3xdgpXLNypmCentTbGDElHX6Me4FtZTBGYPSAF2AYxT9knVaGMzYXWFEsGwQKOmfdr2jE4fw9xjxyWK7mFnzQVIk_ncmpw/p.png)
