import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Form } from '@/components/ui/form.tsx';

export interface FilePopupProps {
    buttonText: string;
}

export function FilePopup({ buttonText }: FilePopupProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button>
                    { buttonText }
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">파일 목록 추가하기</DialogTitle>
                    <DialogDescription>
                        <Form>
                            
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
