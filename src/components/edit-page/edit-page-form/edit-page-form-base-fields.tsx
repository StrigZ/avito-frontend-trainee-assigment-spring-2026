import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Controller, useFormContext } from 'react-hook-form';

export default function EditPageFormBaseFields() {
    const form = useFormContext();

    return (
        <>
            <Separator className="my-4.5" />
            <Field className="md:max-w-1/2">
                <FieldLabel>
                    <span className="text-red-500">*</span> Название
                </FieldLabel>
                <FieldContent>
                    <Controller
                        control={form.control}
                        name="title"
                        render={({ field }) => <Input {...field} required />}
                    />
                </FieldContent>
            </Field>
            <Separator className="my-4.5" />
            <Field className="md:max-w-1/2">
                <FieldLabel>
                    <span className="text-red-500">*</span> Цена
                </FieldLabel>
                <FieldContent>
                    <Controller
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <Input {...field} type="number" required />
                        )}
                    />
                </FieldContent>
            </Field>
        </>
    );
}
