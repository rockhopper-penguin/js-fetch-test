/**
 * APIと通信する処理
 */
const apiCommunication = async () => {
  try {
    // ローディング表示
    isLoading(true);
    // APIエンドポイント
    const endpoint = `https://qiita.com/api/v2/users/rockhopper-penguin`;
    // GETリクエスト送信
    const result = await getRequest(endpoint);
    console.log(result);
    isLoading(false);
  } catch (error) {
    // ローディング非表示
    isLoading(false);
    console.error(error);
    alert("取得に失敗しました");
  }
};

/**
 * ローディングmodalの表示・非表示切り替え
 * @param boolean showStatus ローディングモーダルの表示・非表示切り替え
 */
const isLoading = (showStatus) => {
  // モーダルのDOM取得
  const getMainElementModalDom = document.getElementById("main_element_modal");
  // ローディング表示
  if (showStatus) {
    // displey flexのスタイルを適用する
    getMainElementModalDom.style.display = "flex";
  } else {
    // ローディング非表示
    // displey noneのスタイルを適用する
    getMainElementModalDom.style.display = "none";
  }
};

/**
 * GETリクエスト
 * @param string endpoint エンドポイント
 */
const getRequest = async (endpoint) => {
  try {
    // GETリクエスト
    const res = await fetch(endpoint);
    // 取得内容をJSONに変換して返す
    return await res.json();
  } catch (error) {
    console.log(" ===== GETリクエストで例外発生 ===== ");
    console.error(error);
    console.log(" ================================ ");

    throw new error(error);
  }
};
