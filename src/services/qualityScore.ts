import Request from '@utils/request'

interface getQualityScoreParams {
  companyName: string
  deptId: string
  year: string
  type: number
  engineerName: string
  scoreMonth: string
}

class QualityScore {
  private _request: Request

  constructor () {
    this._request = new Request()
    this._request.setErrorHandler(this.errorHandler)
  }

  errorHandler (err) {
    console.error(err)
  }

  // 获取质量评分汇总数据
  async getCollectList (params: getQualityScoreParams) {
    const {data} = await this._request.getRequest(
      'api/qualityScore/getCollectList',
      params
    )
    return data
  }
}

export default QualityScore
