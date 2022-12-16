/**
 * APIと通信する処理
 */
const apiCommunication = async () => {
  try {
    // ローディング表示
    isLoading(true);
    // 非同期処理
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
