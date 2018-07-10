import { Locale } from "./index";
import { Option } from "./Option";

const messages = {
  "scriptName": {
    "en": "Bulk issue registration",
    "ja": "課題一括登録"
  },
  "title_init" : {
    "en": "Backlog Acquire definitions from Backlog",
    "ja": "Backlog 定義一覧取得"
  },
  "title_run" : {
    "en": "Backlog Execute bulk issue registration",
    "ja": "Backlog 課題一括登録"
  },
  "menu_step1" : {
    "en": "STEP1: Acquire data from Backlog",
    "ja": "STEP1: Backlogからデータを取得する"
  },
  "menu_step2" : {
    "en": "STEP2: Execute bulk issue registration",
    "ja": "STEP2: 課題一括登録を実行"
  },
  "complete_init" : {
    "en": "Acquired the definition of Backlog",
    "ja": "Backlogの定義を取得完了しました"
  },
  "label_spaceId" : {
    "en": "Space ID",
    "ja": "スペースID"
  },
  "label_apiKey" : {
    "en": "API key",
    "ja": "APIキー"
  },
  "label_projectKey" : {
    "en": "Project key",
    "ja": "プロジェクトキー"
  },
  "button_execute" : {
    "en": "Execute",
    "ja": "実行"
  },
  "progress_collect" : {
    "en": "Collecting data...",
    "ja": "データを収集しています..."
  },
  "progress_begin" : {
    "en": "Started bulk issue registration",
    "ja": "一括登録を開始しました..."
  },
  "progress_end" : {
    "en": " has finished",
    "ja": " が正常に行われました"
  }
};

export const Message = {
  findByKey: (key: string, locale: string): string => messages[key][locale],
  SPACE_URL_REQUIRED: (locale: Locale): string => {
    const msg = {
      "en": `Space URL is required`,
      "ja": `スペースURLを入力してください`
    }
    return msg[locale]
  },
  API_KEY_REQUIRED: (locale: Locale): string => {
    const msg = {
      "en": `API key is required`,
      "ja": `APIキーを入力してください`
    }
    return msg[locale]
  },
  SPACE_OR_PROJECT_NOT_FOUND: (locale: Locale): string => {
    const msg = {
      "en": `No space or project found`,
      "ja": `スペースまたはプロジェクトが見つかりません`
    }
    return msg[locale]
  },
  AUTHENTICATE_FAILED: (locale: Locale): string => {
    const msg = {
      "en": `Authentication failed`,
      "ja": `認証に失敗しました`
    }
    return msg[locale]
  },
  API_ACCESS_ERROR: (error: Error, locale: Locale): string => {
    const msg = {
      "en": `API access error ${error.message}`,
      "ja": `APIアクセスエラー ${error.message}`
    }
    return msg[locale]
  },
  VALIDATE_ERROR_LINE: (lineNumber: number, locale: Locale): string => {
    const msg = {
      "en": `Error occured at row ${lineNumber}: `,
      "ja": `エラー ${lineNumber} 行目: `
    }
    return msg[locale]
  },
  VALIDATE_SUMMARY_EMPTY: (locale: Locale): string => {
    const msg = {
      "en": `'Summary' is required`,
      "ja": `'件名' が入力されていません`
    }
    return msg[locale]
  },
  VALIDATE_ISSUE_TYPE_EMPTY: (locale: Locale): string => {
    const msg = {
      "en": `'Issue type' is required`,
      "ja": `'種別名' が入力されていません`
    }
    return msg[locale]
  },
  VALIDATE_PARENT_ISSUE_KEY_NOT_FOUND: (parentIssueKey: Option<string>, locale: Locale): string => {
    const msg = {
      "en": `The specified 'parent issue' key [${parentIssueKey}] was not found`,
      "ja": `'親課題' に指定された課題キー [${parentIssueKey}] が見つかりません`
    }
    return msg[locale]
  },
  ALREADY_BEEN_CHILD_ISSUE: (issueKey: string, locale: Locale): string => {
    const msg = {
      "en": `The issue key '${issueKey}' is a child issue and can therefor not be set as a parent issue`,
      "ja": `課題 '${issueKey}' はすでに子課題となっているため、親課題として設定できません`
    }
    return msg[locale]
  }
}