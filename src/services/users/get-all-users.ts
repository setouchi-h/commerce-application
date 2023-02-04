import type { ApiContext, User } from "types"
import { fetcher } from "utils"

/**
 * ユーザAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザ一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users`, {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}

export default getAllUsers
