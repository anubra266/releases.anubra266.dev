const imageMap: Record<string, string> = {
  panda: "https://panda-css.com/android-chrome-512x512.png",
  zag: "https://zagjs.com/favicon/android-chrome-256x256.png",
  ark: "https://ark-ui.com/icon-512.png",
};

export function getImage(data: any) {
  const [org, project] = data.repo.split("/");
  if (org === "chakra-ui" && project in imageMap) return imageMap[project];
  else return `https://github.com/${data.repo.split("/")[0]}.png`;
}