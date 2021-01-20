import store from '../../store/index'
import router from '../../router'
import { getFirst } from 'src/utils/clone-utils'
import _this from 'vue'

// Construct the meta-information of the tagView,
// and submit it to the store,
// if it meets the conditions (not a public route), generate the tagView element
export function addTagView (to) {
  // Construct a temporary tagView object
  const t = {
    fullPath: to.fullPath,
    name: to.name,
    title: to.meta.title,
    icon: to.meta.icon,
    keepAlive: to.meta.keepAlive || false
  }
  if (getFirst(to.params) !== undefined) {
    t.title = t.title + '：' + getFirst(to.params)
  }
  if (t.title !== null && t.title !== undefined && t.fullPath !== '/' && t.fullPath.indexOf('#') === -1) {
    store.commit('ADD_TAG_VIEW', t)
  }
}

export function setTagView (tagView) {
  store.commit('SET_TAG_VIEW', tagView)
}

// Only remove one tagView
export function removeATagView (state, payload) {
  // Record removed routes
  const removedTagView = state.tagView[payload].fullPath
  state.tagView.splice(payload, 1)
  // If tagView is empty
  if (state.tagView.length === 0) {
    window.sessionStorage.setItem('tagView', '[]')
    router.push('/')
  } else {
    // If the last tagView is removed, the route jumps to the current last tagView
    if (payload === state.tagView.length && _this.$route.path === removedTagView) {
      router.push(state.tagView[payload - 1].fullPath)
      return
    }
    // If the first tagView is removed, the route jumps to the next tagView
    if (payload === 0 && _this.$route.path === removedTagView) {
      router.push(state.tagView[0].fullPath)
      return
    }
    if (_this.$route.path === removedTagView) {
      router.push(state.tagView[payload - 1].fullPath)
    }
  }
}

// Remove one side of tagView
export function removeOneSide (state, payload) {
  switch (payload.side) {
    case 'right':
      state.tagView = state.tagView.slice(0, payload.index + 1)
      if (state.tagView.length === 1) {
        router.push(state.tagView[0].fullPath)
      }
      if (state.tagView.length === payload.index + 1) {
        router.push(state.tagView[payload.index].fullPath)
      }
      break
    case 'left':
      state.tagView = state.tagView.slice(payload.index, state.tagView.length)
      if (state.tagView.length === 1) {
        router.push(state.tagView[0].fullPath)
      }
      if (state.tagView.length <= payload.index) {
        router.push(state.tagView[0].fullPath)
      }
      break
    case 'others':
      state.tagView = state.tagView.splice(payload.index, 1)
      router.push(state.tagView[0].fullPath)
      break
    default:
      break
  }
}
