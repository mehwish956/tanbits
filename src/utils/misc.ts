import { toast } from "react-toastify";

export const notify = (msg: string) => toast(msg);

export const sleep = async (m_seconds: number) =>
  await new Promise((resolve) => setTimeout(resolve, m_seconds));
