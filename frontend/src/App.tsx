import {useState, useRef} from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu.tsx";

import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
// import {Greet} from "wailsjs/go/main/App";

interface Host {
    userId: string;
    host: string;
    port: string;
    sshKey: string;
}

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        // Greet(name).then(updateResultText);
    }

    const data: Host[] = [
        { userId: "test", host: "192.168.0.1", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test" },
    ]

    return (
        <div id="App" className="container flex flex-col">
            <div id="top-header" className="h-24 py-3">v2</div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>파일 정보</CardTitle>
                        <CardDescription>서버로 전송할 선택된 파일 목록을 표시합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full">
                            <div className="flex justify-between pb-3">
                                <div className="flex items-center">
                                    <span className="pr-5 text-center">
                                        파일 개수 : { data.length }
                                    </span>
                                    <span className="pr-5 text-center">
                                        선택된 파일 개수 : { data.length }
                                    </span>
                                </div>
                                <div className="flex">
                                    <div className="pr-3 flex items-center">
                                    <Checkbox id="sendfor-compress"/>
                                        <label htmlFor="sendfor-compress" className="pl-2 select-none">서버 전송시 파일 압축</label>
                                    </div>
                                    <Button>추가</Button>
                                </div>
                            </div>
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <ScrollArea className="h-72 w-full">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[5%] text-center sticky top-0">
                                                        <Checkbox/>
                                                    </TableHead>
                                                    <TableHead className="w-[20%] text-center">UserId</TableHead>
                                                    <TableHead className="w-[30%] text-center">Host</TableHead>
                                                    <TableHead className="w-[10%] text-center">Port</TableHead>
                                                    <TableHead className="w-[20%] text-center">sshKey</TableHead>
                                                    <TableHead className="w-[15%] text-center">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {
                                                    data.map((host, index) => {
                                                        return (
                                                            <TableRow key={index}>
                                                                <TableCell className="text-center">
                                                                    <Checkbox/>
                                                                </TableCell>
                                                                <TableCell className="font-medium text-center">{host.userId}</TableCell>
                                                                <TableCell className="text-center">{host.host}</TableCell>
                                                                <TableCell className="text-center">{host.port}</TableCell>
                                                                <TableCell className="text-center">{host.sshKey}</TableCell>
                                                                <TableCell className="flex justify-center items-center space-x-4 text-sm">
                                                                    <Button>수정</Button>
                                                                    <Separator orientation="vertical" className="h-6"/>
                                                                    <Button className="bg-red-600 hover:bg-red-500">삭제</Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </ContextMenuTrigger>
                                <ContextMenuContent
                                    sticky={'always'}
                                    onCloseAutoFocus={(e) => {
                                        console.log("onCloseAutoFocus", e)
                                    }}
                                >
                                    <ContextMenuItem>Profile</ContextMenuItem>
                                    <ContextMenuItem>Billing</ContextMenuItem>
                                    <ContextMenuItem>Team</ContextMenuItem>
                                    <ContextMenuItem>Subscription</ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        </div>
                    </CardContent>
                </Card>
                <Separator className="mt-3 mb-3 bg-transparent" />
                <Card>
                    <CardHeader>
                        <CardTitle>서버목록</CardTitle>
                        <CardDescription>사용할 서버 목록을 표시합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full">
                            <div className="flex justify-between pb-3">
                                <div className="flex items-center">
                                    <span className="pr-5 text-center">
                                        서버 개수 : { data.length }
                                    </span>
                                </div>
                                <Button>추가</Button>
                            </div>
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <ScrollArea className="h-72 w-full">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[5%] text-center">
                                                        <Checkbox/>
                                                    </TableHead>
                                                    <TableHead className="w-[20%] text-center">UserId</TableHead>
                                                    <TableHead className="w-[30%] text-center">Host</TableHead>
                                                    <TableHead className="w-[10%] text-center">Port</TableHead>
                                                    <TableHead className="w-[20%] text-center">sshKey</TableHead>
                                                    <TableHead className="w-[15%] text-center">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {
                                                    data.map((host, index) => {
                                                        return (
                                                            <TableRow key={index}>
                                                                <TableCell className="text-center">
                                                                    <Checkbox/>
                                                                </TableCell>
                                                                <TableCell className="font-medium text-center">{host.userId}</TableCell>
                                                                <TableCell className="text-center">{host.host}</TableCell>
                                                                <TableCell className="text-center">{host.port}</TableCell>
                                                                <TableCell className="text-center">{host.sshKey}</TableCell>
                                                                <TableCell className="flex justify-center items-center space-x-4 text-sm">
                                                                    <Button>수정</Button>
                                                                    <Separator orientation="vertical" className="h-6"/>
                                                                    <Button className="bg-red-600 hover:bg-red-500">삭제</Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </ContextMenuTrigger>
                                <ContextMenuContent
                                    sticky={'always'}
                                    onCloseAutoFocus={(e) => {
                                        console.log("onCloseAutoFocus", e)
                                    }}
                                >
                                    <ContextMenuItem>Profile</ContextMenuItem>
                                    <ContextMenuItem>Billing</ContextMenuItem>
                                    <ContextMenuItem>Team</ContextMenuItem>
                                    <ContextMenuItem>Subscription</ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {/*<div id="result" className="result">{resultText}</div>*/}
            {/*<div id="input" className="input-box">*/}
            {/*    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>*/}
            {/*    <button className="btn" onClick={greet}>Greet</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default App
