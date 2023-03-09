function msgTime (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgTime("", "Hello", 100).then((msg) =>
msgTime(msg, "Hi", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})