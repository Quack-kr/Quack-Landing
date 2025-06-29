"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { postInquiry } from "@/apis/services/inquiry";

const inquirySchema = z.object({
  name: z.string().min(1, "성함을 입력해 주세요."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  content: z.string().min(1, "문의하실 내용을 입력해 주세요."),
});

type InquirySchema = z.infer<typeof inquirySchema>;

export default function InquiryDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  useEffect(() => {
    if (!open) {
      setComplete(false);
      setLoading(false);
      form.reset();
    }
  }, [open, form]);

  const handleServerError = (error: any) => {
    if (error?.data) {
      Object.entries(error.data).forEach(([key, msg]) => {
        if (key === "message") {
          form.setError("content", { message: msg as string });
        } else {
          form.setError(key as keyof InquirySchema, { message: msg as string });
        }
      });
    }
  };

  const onSubmit = async (data: InquirySchema) => {
    setLoading(true);
    try {
      await postInquiry({
        name: data.name,
        email: data.email,
        message: data.content,
      });
      setComplete(true);
      form.reset();
    } catch (error) {
      handleServerError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#171714] !rounded-[20px] p-0 min-w-[784px] border-none shadow-none">
        {!complete ? (
          <div className="py-[60px] px-10">
            <DialogHeader>
              <DialogTitle className="text-[32px] font-bold text-[#EFEEDF] text-center mb-6">
                문의하기
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 px-20"
                autoComplete="off"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="font-pretendard text-xl text-[#EFEEDF] font-bold">
                        성함*
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="성함을 입력해주세요"
                          className="font-pretendard bg-[#21211D] h-14 pl-6 rounded-[6px] border border-[#A8A7A1] text-[#F9F8F4] font-medium placeholder:text-[#A8A7A1] placeholder:font-medium"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage className="font-pretendard text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="font-pretendard text-xl text-[#EFEEDF] font-bold">
                        이메일*
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="이메일을 입력해주세요"
                          className="font-pretendard bg-[#21211D] h-14 pl-6 rounded-[6px] border border-[#A8A7A1] text-[#F9F8F4] font-medium placeholder:text-[#A8A7A1] placeholder:font-medium"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage className="font-pretendard text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="font-pretendard text-xl text-[#EFEEDF] font-bold">
                        문의내용*
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          autoComplete="off"
                          placeholder="문의하실 내용을 입력해주세요"
                          className="font-pretendard bg-[#21211D] h-14 min-h-[120px] pt-4 pl-6 rounded-[8px] border border-[#A8A7A1] text-[#F9F8F4] font-medium placeholder:text-[#A8A7A1] placeholder:font-medium"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage className="font-pretendard text-red-500" />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button
                    type="submit"
                    className="font-pretendard w-[380px] rounded-[8px] mx-auto mt-4 bg-[#EFD800] text-[#171714] font-bold text-base h-14 hover:bg-[#FFD600] transition"
                    disabled={loading}
                  >
                    {loading ? "전송 중..." : "문의하기"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        ) : (
          <div className="py-[60px] px-[120px] flex flex-col">
            <DialogTitle className="font-pretendard text-[32px] font-bold text-[#EFEEDF] mb-6 text-left">
              문의가 완료되었어요.
            </DialogTitle>
            <DialogDescription className="font-pretendard text-xl text-[#A8A7A1] font-medium mb-[56px] text-left">
              문의가 정상적으로 접수되었습니다.
              <br />
              담당자가 확인 후 순차적으로 연락드릴 예정입니다.
            </DialogDescription>
            <div className="flex items-center justify-center gap-4 w-full">
              <Button
                variant="outline"
                className="font-pretendard w-[224px] rounded-[8px] h-12 border-[#323230] text-[#EFEEDF] bg-[#323230] hover:bg-[#323230af] hover:text-[#EFEEDF]"
                onClick={onClose}
              >
                취소
              </Button>
              <Button
                className="font-pretendard w-[224px] rounded-[8px] h-12 bg-[#EFEEDF] text-[#171714] font-bold hover:bg-[#FFE100]"
                onClick={onClose}
              >
                확인
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
