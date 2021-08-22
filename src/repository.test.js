const rewire = require("rewire")
const repository = rewire("./repository")
const Repository = repository.__get__("Repository")
// @ponicode
describe("componentWillReceiveProps", () => {
    let inst

    beforeEach(() => {
        inst = new Repository()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ data: { repositoryOwner: { repository: "project_secret_", stargazers: "Harbors", watchers: "commit f20ba84baadcbd1f3a45d95e9bb5aef588f4e902\r\nAuthor: Marty Douglas <Rubie_Boehm29@yahoo.com>\r\nDate: Thu Jul 29 2021 09:06:18 GMT+0200 (Central European Summer Time)\r\n\r\n    override solid state microchip\r\n", totalCount: "Implementation" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ data: { repositoryOwner: { repository: "proj_", stargazers: "Extensions", watchers: "commit 380428b6b61b64631d941b27db3e91df27bfff8e\r\nAuthor: Lera Swift <Lela.Lubowitz@yahoo.com>\r\nDate: Wed Jul 28 2021 23:21:29 GMT+0200 (Central European Summer Time)\r\n\r\n    reboot digital application\r\n", totalCount: "Implementation" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ data: { repositoryOwner: { repository: "fake_project", stargazers: "Lights", watchers: "commit 380428b6b61b64631d941b27db3e91df27bfff8e\r\nAuthor: Lera Swift <Lela.Lubowitz@yahoo.com>\r\nDate: Wed Jul 28 2021 23:21:29 GMT+0200 (Central European Summer Time)\r\n\r\n    reboot digital application\r\n", totalCount: "Identity" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ data: { repositoryOwner: { repository: "bc23a9d531064583ace8f67dad60f6bb", stargazers: "Port", watchers: "commit e6d1117d97e7cc250166120d2eee1c2662c58150\r\nAuthor: Keagan Cole <Crystal69@gmail.com>\r\nDate: Thu Jul 29 2021 05:36:16 GMT+0200 (Central European Summer Time)\r\n\r\n    override wireless alarm\r\n", totalCount: "Quality" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ data: { repositoryOwner: { repository: "projectId-1969970175", stargazers: "Port", watchers: "commit 03ccef2ffa982df061ae86ca8730cd9ad0af05b3\r\nAuthor: Ladarius Zboncak <Ricky.Schultz37@hotmail.com>\r\nDate: Wed Jul 28 2021 16:52:11 GMT+0200 (Central European Summer Time)\r\n\r\n    program wireless program\r\n", totalCount: "Implementation" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
