import {useState, useRef} from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu.tsx";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Button } from "@/components/ui/button.tsx";
// import {Greet} from "wailsjs/go/main/App";

interface Host {
    userId: string;
    host: string;
    port: string;
    sshKey: string;
    path: string;
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
        { userId: "test", host: "192.168.0.1", port: "22", sshKey: "test", path: "/home/test" },
        { userId: "test", host: "192.168.0.2", port: "22", sshKey: "test", path: "/home/test" },
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
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[20%] text-center">UserId</TableHead>
                                            <TableHead className="w-[30%] text-center">Host</TableHead>
                                            <TableHead className="w-[10%] text-center">Port</TableHead>
                                            <TableHead className="w-[20%] text-center">sshKey</TableHead>
                                            <TableHead className="w-[20%] text-center">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            data.map((host, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-medium text-center">{host.userId}</TableCell>
                                                        <TableCell className="text-center">{host.host}</TableCell>
                                                        <TableCell className="text-center">{host.port}</TableCell>
                                                        <TableCell className="text-center">{host.sshKey}</TableCell>
                                                        <TableCell className="flex justify-evenly">
                                                            <Button>수정</Button>
                                                            <Button className="bg-red-600 hover:bg-red-500">삭제</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
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
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
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
