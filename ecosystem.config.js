module.exports = {
    apps: [
        {
            name: "drivingschool",
            script: "npm",
            args: "start",
            cwd: "/root/drivingschool",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
}
