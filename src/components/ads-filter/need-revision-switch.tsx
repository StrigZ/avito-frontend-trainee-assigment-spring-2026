import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

type Props = {};
export default function NeedRevisionSwitch({}: Props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <label className="flex items-center justify-between text-sm font-bold">
            Только требующие доработок
            <Switch
                size="default"
                checked={isActive}
                onCheckedChange={setIsActive}
            />
        </label>
    );
}
