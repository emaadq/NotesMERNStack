import pkg from '@upstash/ratelimit';
const { Ratelimit } = pkg;
import { Redis } from "@upstash/redis";
import dotenv from "dotenv"; // get the env variables for upstash
dotenv.config();

//Create a rateLimiter that allows 10 requests per 20s (very low; testing purposes)
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default rateLimit;