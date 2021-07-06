// media resize

export const smallImageUrl = (imageUrl, size) => {
    const image = imageUrl.match(/media\/screenshots/)
        ? imageUrl.replace(
              "media/screenshots",
              `media/resize/${size}/-/screenshots`
          )
        : imageUrl.replace("media/games", `media/resize/${size}/-/games`);

    return image;
};
