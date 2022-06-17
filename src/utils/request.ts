type requestOptionsMethod =
  'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'
  | undefined

class Request {
  private readonly _header: any
  private _errorHandler: any

  constructor () {
    this._header = {
      'data-type': 'application/json'
    }
  }

  /**
   * 统一异常处理上报
   */
  setErrorHandler (handler) {
    this._errorHandler = handler
  }

  /**
   * GET请求
   */
  getRequest (url, data, showLoading = false) {
    return this.request(url, data, 'GET', showLoading)
  }

  /**
   * POST请求
   */
  postRequest (url, data, header, showLoading = false) {
    return this.request(url, data, 'POST', showLoading)
  }

  /**
   * 网络请求
   */
  request (url: string, data: any, method: requestOptionsMethod, showLoading: boolean) {
    return new Promise<UniApp.RequestSuccessCallbackResult>((resolve, reject) => {
      if (showLoading) {
        uni.showLoading({
          title: '加载中...',
          mask: true
        })
      }

      uni.request({
        url: url,
        data: data,
        header: this._header,
        method: method,
        success: res => {
          if (res.statusCode === 200) {
            resolve(res)
          } else {
            if (this._errorHandler !== null) this._errorHandler(res)
            reject(res)
          }
        },
        fail: err => {
          if (this._errorHandler !== null) this._errorHandler(err)
          reject(err)
        }
      })
    })
  }
}

export default Request
