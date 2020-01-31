import axios from 'axios';
  
  export default function uploadImage (e, setLoading="", setRecipeImage=""){
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "recipe_image");
    if(setLoading) setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dr34bum3p/image/upload", data)
      .then(res => {
        if(setRecipeImage) setRecipeImage(res.data.secure_url);
        if(setLoading) setLoading(false);
      })
      .catch(err => {
        console.log(
          "An error was encounterd while trying to upload this image",
          err
        );
      });
  };