import { Env } from "@/index";
import { Controller } from "../../domain/ports";

export type MakeController = (env: Env) => Controller