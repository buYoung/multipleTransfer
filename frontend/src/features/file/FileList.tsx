import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useFileStore } from "@/features/file/fileStore.ts";
import { useCallback } from "react";
import { FileData, Permission } from '@/features/file/fileStore.type.ts';
import { FilePopup } from '@/features/file/filePopup.tsx';

export function FileList() {
    const [fileList, selectedFileList] = useFileStore((state) => [state.fileList, state.selectedFileList]);
    const [selectFile, toggleAll] = useFileStore((state) => [state.selectFile, state.toggleAll]);

    const handleSelectFile = useCallback((file: FileData) => {
        selectFile(file);
    }, [])
    const handleToggleAll = useCallback(() => {
        toggleAll();
    }, [])

    return (
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
                                        파일 개수 : { fileList.length }
                                    </span>
                            <span className="pr-5 text-center">
                                        선택된 파일 개수 : { selectedFileList.length }
                                    </span>
                        </div>
                        <div className="flex">
                            <div className="pr-3 flex items-center">
                                {/*<Checkbox id="sendfor-compress"/>*/}
                                {/*    <label htmlFor="sendfor-compress" className="pl-2 select-none">서버 전송시 파일 압축</label>*/}
                            </div>
                            <FilePopup buttonText={"추가"}/>
                        </div>
                    </div>
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <ScrollArea className="h-72 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[5%] text-center sticky top-0">
                                                <Checkbox onCheckedChange={handleToggleAll}/>
                                            </TableHead>
                                            <TableHead className="w-[20%] text-center">File Name</TableHead>
                                            <TableHead className="w-[45%] text-center">Path</TableHead>
                                            <TableHead className="w-[15%] text-center">Size</TableHead>
                                            <TableHead className="w-[20%] text-center">Permission</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            fileList.map((file, index) => {
                                                const isSelected = selectedFileList.includes(file);

                                                file.permission.push(Permission.Read);
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell className="text-center">
                                                            <Checkbox checked={isSelected} onCheckedChange={() => handleSelectFile(file)} />
                                                        </TableCell>
                                                        <TableCell className="font-medium text-center">{file.fileName}</TableCell>
                                                        <TableCell className="text-center">{file.path}</TableCell>
                                                        <TableCell className="text-center">{file.size}({file.sizeHumanReadable})</TableCell>
                                                        <TableCell className="text-center">{file.permissionHumanReadable}({file.permission.join(', ')})</TableCell>
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
    )
}
