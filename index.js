;(function () {
  'use strict'
  GM_addStyle(`
    #bili_zhoushuyi .popover-video-card {
      display: none;
    }
    #bili_zhoushuyi a:hover+.popover-video-card {
      display: block;
    }
  `)
  const TITLE = '周姐'
  const KEY_WORDS = '周淑怡'
  const ICON =
  'data:image/jpeg;base64,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'
  
  let currentPage = 1
  let page = 0
  let videoList = []

  async function getDetail(bvid) {
    let res = await fetch(
      `https://api.bilibili.com/x/web-interface/archive/stat?bvid=${bvid}`,
    )
    return (await res.json()).data
  }

  async function getNewVideo() {
    let res = await fetch(
      `https://api.bilibili.com/x/web-interface/search/type?context=&order=pubdate&keyword=${KEY_WORDS}&search_type=video&page=${currentPage++}`,
    )
    videoList = videoList.concat((await res.json()).data.result)
  }

  async function getHotVideo() {
    let res = await fetch(
      `https://api.bilibili.com/x/web-interface/web/channel/multiple/list?channel_id=780447&sort_type=hot&offset=&page_size=8`,
    )
    return (await res.json()).data.list[0].items
  }

  function bigNumber(num) {
    return num > 10000 ? `${(num / 10000).toFixed(2)}万` : num
  }

  function s2d(string) {
    return new DOMParser().parseFromString(string, 'text/html').body.childNodes[0]
  }

  async function refresh () {
    page++
    if (videoList.length < page * 8 + 8) {
      await getNewVideo()
    }
    drawVideos()
  }

  function timeFormat(time) {
    let res = []
    let [s = 0, m = 0] = time.split(':').reverse()

    res.unshift(String(s).padStart(2, '0'))
    res.unshift(String(m % 60).padStart(2, '0'))
    let h = Math.floor(m / 60)
    if (h) {
      res.unshift(String(h % 60).padStart(2, '0'))
    }
    return res.join(':')
  }
  
  function dateFormat(ts) {
    let time = new Date(ts*1000)
    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
  }
  function drawVideos() {
    const VIDEO_DOM = document.querySelector('#bili_zhoushuyi .zone-list-box')
    VIDEO_DOM.innerHTML = ''
    
    videoList.slice(page*8, page*8+8).forEach((item) => {
      let title = item.title.replace(/<em class="keyword">(.*?)<\/em>/g, '$1')
      let DOM = s2d(`
        <div class="video-card-common">
          <div class="card-pic card-pic-hover"><a href="//www.bilibili.com/video/${item.bvid}" target="_blank"><img
              src="${item.pic}"
              alt="">
            <div class="count">
              <div class="left"><span><i class="bilifont bili-icon_shipin_bofangshu"></i>
                  ${item.play}
                </span><span><i class="bilifont bili-icon_shipin_dianzanshu"></i>${item.favorites}</span></div>
              <div class="right"><span>${timeFormat(item.duration)}</span></div>
            </div><i class="crown"></i>
          </a>
          <div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display: none;"></span>
          </div>
        </div><a href="//www.bilibili.com/video/${item.bvid}" target="_blank" title="${title}"
          class="title">
          ${title}
        </a><a href="//space.bilibili.com/${item.mid}/" target="_blank" class="up"><i
            class="bilifont bili-icon_xinxi_UPzhu"></i>${item.author}
        </a>
      </div>`)
      VIDEO_DOM.append(DOM)
    })
  }

  let zhoujieDOM = `
  <div id="bili_zhoushuyi">
    <div class="space-between report-wrap-module report-scroll-module" id="bili_report_douga" scrollshow="true">
      <div class="card-list">
        <header class="storey-title">
          <div class="l-con"> <img class="svg-icon" src="${ICON}" /> <a
              href="https://search.bilibili.com/all?keyword=${KEY_WORDS}" target="_blank" class="name">${TITLE}</a></div>
          <div class="exchange-btn">
            <div class="btn btn-change zhoujie-refresh"><i class="bilifont bili-icon_caozuo_huanyihuan"></i> 换一换 </div><a
              href="https://search.bilibili.com/all?keyword=${KEY_WORDS}&order=pubdate" target="_blank" class="btn more">
              更多 <i class="bilifont bili-icon_caozuo_qianwang"></i></a>
          </div>
        </header>
        <div class="zone-list-box"> </div>
      </div>
      <div class="rank-list">
        <header class="rank-header"><span class="name">排行榜</span><a
            href="https://search.bilibili.com/all?keyword=${KEY_WORDS}" target="_blank" class="more">更多<i
              class="bilifont bili-icon_caozuo_qianwang"></i></a></header>
      </div>
    </div>
  </div>`

  window.addEventListener(
    'load',
    async function () {
      let content = document.querySelector('.first-screen')
      let anchor = document.querySelector('#reportFirst2')
      let blocker = new DOMParser().parseFromString(zhoujieDOM, 'text/html') .body.childNodes[0]
        
      // 插入初始模版
      content.insertBefore(blocker, anchor)

      document.querySelector('.zhoujie-refresh').addEventListener('click', refresh)
      
      const RANK_DOM = document.querySelector('#bili_zhoushuyi .rank-list')
      
      // 插入最新视频
      await getNewVideo()
      drawVideos()
      
    
      // 插入热门视频
      let rankList = await getHotVideo()
      let firstDetail = await getDetail(rankList[0].bvid)
      let firstTitle = rankList[0].name.replace(
        /<em class="keyword">(.*?)<\/em>/g,
        '$1',
      )
      let first = `
      <div class="rank-wrap"><span class="number on">1</span>
        <div class="preview">
          <div class="pic">
            <a href="//www.bilibili.com/video/${rankList[0].bvid}" target="_blank" class="link">
              <img src="${rankList[0].cover}" alt="${firstTitle}">
            </a>
            <div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display: none;"></span>
            </div>
          </div>
          <div class="txt"><a href="//www.bilibili.com/video/${
            rankList[0].bvid
          }" target="_blank" class="link">
              <p title="${firstTitle}">${firstTitle}</p>
            </a><span>播放次数：${firstDetail.view_count}</span></div>
        </div>
        <div class="popover-video-card pvc" style="display: none;">
          <div class="content"><img src="${rankList[0].cover}" alt="">
            <div class="info">
              <p class="f-title">${firstTitle}</p>
              <p class="subtitle"><span class="name">${rankList[0].author_name }</span>
                <span class="point">·</span><span class="time">2021-11-22</span></p>
            </div>
          </div>
          <div class="count">
            <ul>
              <li><i class="bilifont bili-icon_shipin_bofangshu"></i><span>${bigNumber( firstDetail.view )}</span></li>
              <li><i class="bilifont bili-icon_shipin_danmushu"></i><span>${bigNumber( firstDetail.danmaku )}</span></li>
              <li><i class="bilifont bili-icon_shipin_shoucangshu"></i><span>${bigNumber( firstDetail.favorite )}</span></li>
              <li><i class="bilifont bili-icon_shipin_yingbishu"></i><span>${bigNumber( firstDetail.coin )}</span></li>
            </ul>
          </div>
        </div>
      </div>
      `
      RANK_DOM.append(s2d(first))

      rankList.slice(1, 10).forEach((item, index) => {
        let title = item.name.replace(/<em class="keyword">(.*?)<\/em>/g, '$1')
        let DOM = s2d(`
        <div class="rank-wrap"><span class="number ${index < 2 && 'on'}">${index + 2}</span>
          <a href="//www.bilibili.com/video/${item.bvid}" target="_blank" class="link">
            <p title="${title}" class="title">${title}</p>
          </a>
          <div class="popover-video-card pvc">
            <div class="content"><img
                src="${item.cover}" alt="">
              <div class="info">
                <p class="f-title">${title}</p>
                <p class="subtitle"><span class="name">${
                  item.author_name
                }</span><span class="point">·</span><span
                    class="time">${timeFormat(item.duration)}</span></p>
              </div>
            </div>
            <div class="count">
              <ul>
                <li><i class="bilifont bili-icon_shipin_bofangshu"></i><span>-</span></li>
                <li><i class="bilifont bili-icon_shipin_danmushu"></i><span>-</span></li>
                <li><i class="bilifont bili-icon_shipin_shoucangshu"></i><span>-</span></li>
                <li><i class="bilifont bili-icon_shipin_yingbishu"></i><span>-</span></li>
              </ul>
            </div>  
          </div>
        </div>`)
        RANK_DOM.append(DOM)
      })
    },
    false,
  )
})()
