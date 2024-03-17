import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo } from "react";
import { CheckBold } from "@/components/icon/Check.tsx";

const checkboxVariants = cva("w-10 h-10 flex items-center justify-center rounded-full p-1 transition-colors duration-150 ease-in-out");

export type CheckboxState = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};

const IconCheckbox = React.forwardRef<
    React.ElementRef<"button">,
    React.ComponentPropsWithoutRef<"button"> &
        VariantProps<typeof checkboxVariants> & CheckboxState
>(({ className, ...props }, ref) => {
    const { checked } = props;
    const [isChecked, setIsChecked] = React.useState(checked);

    const handleChecked = useCallback(() => {
        setIsChecked(prev => !prev);
    }, []);

    useEffect(() => {
        props.onCheckedChange(isChecked);
    }, [checked]);


    const memoizedClassName = useMemo(() => isChecked ?
            `${cn(checkboxVariants(), className)} bg-checkbox-checked text-checkbox-checked-text`
            : `${cn(checkboxVariants(), className)} bg-checkbox-unchecked text-checkbox-unchecked-text`
        , [isChecked, className]);

    return (
        <button
            ref={ref}
            className={memoizedClassName}
            onClick={handleChecked}
            {...props}
        >
            { isChecked ? <CheckBold /> : '' }
        </button>
    )
});
IconCheckbox.displayName = "IconCheckbox";

export { IconCheckbox };
