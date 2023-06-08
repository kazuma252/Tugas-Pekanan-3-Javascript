const password = '12345'
const validpassword = '123456'
var retry = 0 ;
if (password == validpassword)
{
    console.log("selamat datang bos")
}
else
{
    console.log("password salah, coba lagi!")
}


if (password == validpassword)
{
    console.log("selamat datang bos")
}
else if (retry<3)
{
    console.log("ulangi!")
    retry=retry++
}
else {console.log("batas pengisian")}
