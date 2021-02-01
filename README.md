# 格言アプリ  
好きな時に、自分の好きな格言を見れたり、人生を豊にする言葉に出会えるアプリです。  

 - 動作とデザイン確認デモ（XD） 
 url : https://xd.adobe.com/view/9e1debd4-6cf8-4fe1-985e-517e70c533ff-cb4e/  
## アプリの作成背景

海外で生活していた時、好きなビジネス書の作家の方がまとめた格言、名言集を持ち歩いていた。
落ち込んだ時や何かに失敗して落ち込んだ時や何気なく朝に読んだり、その言葉をみるだけで
頑張ろうという気持ちになれた。
自分の状況によっても、言葉から受け取るメッセージや感じ方や考え方も変わる。
もっと気軽に確認したり、思い出せることができたら、便利だし、自分のお気に入りの
格言を保存して確認できれば、使いたい時に見つけやすかったり、人にお勧めしやすい。
また、他の人が影響を受けた格言を知ることもできれば、もっといい格言にで会える。

## 使用技術
## デモサイト  
- テストID  
  - hoge  
- テストPASSWORD  
  - hogehoge  
- デモサイトURL  

## 環境構築〜ローカル実行方法  
## ページ構成  
- ログイン画面: (/signin)  
  - 非ログインユーザー  
- 新規登録画面: (/signup)  
  - 非ログインユーザー  
- Topページ: (/)  
  - ログインユーザー、一般ユーザー 
- Myページ: (mypage/_id)  
  - ログインユーザー
- 格言一覧ページ: (sayings)  
  - ログインユーザー、一般ユーザー
- 格言の内容編集ページ: (sayings/_id/edit)  
  - ログインユーザー
- 登録ユーザー一覧ページ: (users)  
  - ログインユーザー、一般ユーザー
- ユーザー情報のページ: (users/_id)  
  -ログインユーザー、一般ユーザー  
- 格言詳細確認モーダル: (components/detail_saying)  
  -ログインユーザー、一般ユーザー、  
- 格言作成モーダル:  (components/create_saying)  
  -  ログインユーザー


## 実装(予定)機能









## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
