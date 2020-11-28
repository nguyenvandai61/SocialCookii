let getImageObj = async (file, index) => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let imageObj = {
                name: "base-image-" + Date.now() + index,
                description: '',
                img: {
                    data: reader.result,
                    contentType: file.type
                }
            };
            resolve(imageObj);
        }
    })
}

let file2Base64 = async (file) => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        }
    })
}

export default {
    getImageObj,
    file2Base64
}