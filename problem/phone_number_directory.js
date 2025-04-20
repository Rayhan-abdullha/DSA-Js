function phoneNumberDirectory(phoneNumbers) {
    const directory = new Map()
    for (const element of phoneNumbers) {
        const [name, phone] = element.split(':')
        directory.set(name, phone)
    }
    console.log(directory)
}
phoneNumberDirectory([
    "john:++3643545352",
    "rayahn:++13643545352",
    "robi:++4225352",
])