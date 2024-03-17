import {useState} from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu.tsx";

import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Label } from "@radix-ui/react-context-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { CheckBold } from "@/components/icon/Check.tsx";
// import {Greet} from "wailsjs/go/main/App";

interface Host {
    userId: string;
    host: string;
    port: string;
    sshKey: string;
}

interface File {
    name: string;
    size: string;
    path: string;
}

function App() {
    const [checkState, setCheckState] = useState(false);
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

    const files: File[] = [
        { name: "test1", size: "1MB", path: "C:/test1" },
        { name: "test2", size: "2MB", path: "C:/test2" },
        { name: "test3", size: "3MB", path: "C:/test3" },
        { name: "test4", size: "4MB", path: "C:/test4" },
        { name: "test5", size: "5MB", path: "C:/test5" },
        { name: "test6", size: "6MB", path: "C:/test6" },
        { name: "test7", size: "7MB", path: "C:/test7" },
        { name: "test8", size: "8MB", path: "C:/test8" },
        { name: "test9", size: "9MB", path: "C:/test9" },
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
                                        서버 개수 : { files.length }
                                    </span>
                                </div>
                                <Button>추가</Button>
                            </div>
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <ScrollArea className="h-72 w-full">
                                        <div className="flex flex-wrap gap-6 p-3">
                                            {
                                                files.map((file, index) => {
                                                    return (
                                                        <Card key={index} className="mb-3 flex-auto">
                                                            <CardHeader>
                                                                <CardTitle className="flex justify-between">
                                                                    <div>
                                                                        {file.name}
                                                                    </div>
                                                                    <div>
                                                                        <button
                                                                            className={ `w-10 h-10 flex items-center justify-center rounded-full p-1 transition-colors duration-150 ease-in-out ${
                                                                                checkState ? 'bg-checkbox-checked text-checkbox-checked-text' : 'bg-checkbox-unchecked text-checkbox-unchecked-text'
                                                                            }` }
                                                                            onClick={ () => {
                                                                                setCheckState(!checkState);
                                                                            } }
                                                                            aria-checked={ checkState }
                                                                            role="checkbox"
                                                                        >
                                                                            { checkState ? <CheckBold /> : '' }
                                                                        </button>
                                                                    </div>
                                                                </CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                            <div className="w-full pb-7">
                                                                    <Select>
                                                                    <SelectTrigger>
                                                                            <SelectValue placeholder="Theme" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectItem value="light">Light</SelectItem>
                                                                            <SelectItem value="dark">Dark</SelectItem>
                                                                            <SelectItem value="system">System</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                                <div className="flex justify-between items-center">
                                                                    <span className="pr-3">파일 크기 : {file.size}</span>
                                                                    <div className="flex space-x-4">
                                                                        <Button>수정</Button>
                                                                        <Button className="bg-red-600 hover:bg-red-500">삭제</Button>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    )
                                                })
                                            }
                                        </div>
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
