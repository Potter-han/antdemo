import COS from 'cos-js-sdk-v5' //脚手架安装

const cos = new COS({
  SecretId: 'AKIDb9i9MKAoDON9i5Jb2Vp26xnElBlV6Uem',
  SecretKey: 'GKR3YqulOny86AOWgmstjNp9IKBuS0Nv'
})
// 上传文件
export const uploadFile = async (file, callback) => {
  cos.putObject({
    Bucket: 'antdemo-1319322500', /* 存储桶 */
    Region: 'ap-nanjing', /* 存储桶所在地域，必须字段 */
    StorageClass: 'STANDARD',
    Key: file.name, /* 文件名 */
    Body: file, /* 文件对象 */
    onprogress: function (progressData) {
      console.log(JSON.stringify(progressData));
    }
  }).then(function (data) {
    callback(data)
  })
}
// 删除文件
export const deleteFile = async (fileName, callback) => {
  cos.deleteObject({
    Bucket: 'antdemo-1319322500', /* 存储桶 */
    Region: 'ap-nanjing', /* 存储桶所在地域，必须字段 */
    Key: fileName, /* 文件名 */
    onprogress: function (progressData) {
      console.log(JSON.stringify(progressData));
    }
  }).then(function (data) {
    callback(data)
  })
}