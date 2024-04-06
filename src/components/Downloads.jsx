import React from "react";
import Link from "@docusaurus/Link";

export default function Downloads() {
  return (
    <div>
      <div className="client-image-container">
        <img src="/img/server-logo.png" className="client-image" />
      </div>
      <div className="download-btn-container">
        <Link
          href="https://github.com/ayonshafiul/peyara-mouse-server/releases/download/v0.0.6/PeyaraRemoteMouseServer-0.0.6.Setup.exe"
          className="download-btn"
        >
          <img
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjA2LjExNSwyNTUuOTU4Yy0yMy44NTQtMTIuMjU5LTQ3LjA0My0xOC40NzktNjguOTQtMTguNDc5Yy0yLjk3OCwwLTUuOTc2LDAuMDktOC45NzQsMC4zNTQgICBjLTI3Ljk0LDIuMzEyLTUzLjQ2MSw5LjY4NC02OS44NzUsMTUuNDE0Yy00LjM1NCwxLjU5OS04LjgxNywzLjI4OC0xMy40MTUsNS4xNTFMMCw0MTQuMDk3ICAgYzMwLjg1MS0xMS40MTYsNTguMTQ2LTE2Ljk3LDgzLjEzNS0xNi45N2M0MC40MjMsMCw2OS43NjQsMTUuMTA0LDkzLjk5NiwzMC42NTJjMTEuNDgxLTM4Ljk2LDM5LjAyMi0xMzMuMDQ2LDQ3LjI0MS0xNjEuMTYyICAgQzIxOC4zOTcsMjYyLjk3NiwyMTIuMzM0LDI1OS4zMzMsMjA2LjExNSwyNTUuOTU4eiBNMjY0LjE3NCwyOTUuNTM2TDIxOC45NTEsNDUyLjYxYzEzLjQxNiw3LjY4Niw1OC41NDksMzIuMDIzLDkzLjEwNSwzMi4wMjMgICBjMjcuODk1LDAsNTkuMTI1LTcuMTQ2LDk1LjQxNi0yMS44OTZsNDMuMTgtMTUwLjk4OGMtMjkuMzE2LDkuNDYxLTU3LjQzOCwxNC4yNi04My43MzIsMTQuMjYgICBDMzE4Ljk0NSwzMjYuMDEsMjg1LjM2MywzMTAuNDYxLDI2NC4xNzQsMjk1LjUzNnogTTE0Ni40MTEsMTg0LjM5NmMzOC41NTksMC4zOTksNjcuMDc2LDE1LjEwNCw5MC43MDgsMzAuMjUxbDQ2LjM3Ni0xNTguNjcyICAgYy05Ljc3Mi01LjU5OC0zNS40MDMtMTkuNTQ3LTUzLjkyOS0yNC4zYy0xMi4xOTMtMi44NDItMjUuMDEtNC4zMDgtMzguNjAyLTQuMzA4Yy0yNS44OTgsMC40ODgtNTQuMTk0LDYuOTczLTg2LjQ0NCwxOS45ICAgTDYwLjMsMjAyLjU2NGMzMi40MDQtMTIuMjE4LDYwLjMyMi0xOC4xNyw4Ni4wNDMtMTguMTdDMTQ2LjM2NiwxODQuMzk2LDE0Ni40MTEsMTg0LjM5NiwxNDYuNDExLDE4NC4zOTZ6IE01MTIsOTkuMDYyICAgYy0yOS40MDYsMTEuNDE2LTU4LjEwNCwxNy4yMzMtODUuNTE0LDE3LjIzM2MtNDUuODQ0LDAtNzkuNjQ2LTE1LjkwMS0xMDEuNTQ3LTMxLjE4M0wyNzguOTY0LDI0NC4yMyAgIGMzMC44NzQsMTkuODU0LDY0LjE0NiwyOS45MzksOTkuMDYyLDI5LjkzOWMyOC40NzUsMCw1Ny45NzEtNi44NCw4Ny43My0yMC4zNDRsLTAuMDkyLTEuMTExbDEuODY3LTAuNDQzTDUxMiw5OS4wNjJ6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
            title="Peyara Client for Windows"
          />
          Download for Windows
        </Link>
        <Link
          href="https://github.com/ayonshafiul/peyara-mouse-server/releases/download/v0.0.6/PeyaraRemoteMouseServer-darwin-x64-0.0.6.zip"
          className="download-btn"
        >
          <img
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzk1Ljc0OCwyNzIuMDQ2Yy0wLjY0Ni02NC44NDEsNTIuODgtOTUuOTM4LDU1LjI3MS05Ny40ODNjLTMwLjA3NS00NC4wMS03Ni45MjUtNTAuMDM5LTkzLjYyLTUwLjczNiAgIGMtMzkuODcxLTQuMDM3LTc3Ljc5OCwyMy40NzQtOTguMDMzLDIzLjQ3NGMtMjAuMTg0LDAtNTEuNDA5LTIyLjg3Ny04NC40NzYtMjIuMjc2Yy00My40NTgsMC42NDYtODMuNTI5LDI1LjI2OS0xMDUuOTA2LDY0LjE5ICAgYy00NS4xNTIsNzguMzUtMTEuNTYzLDE5NC40MiwzMi40NDUsMjU3Ljk2M2MyMS41MDQsMzEuMTA0LDQ3LjE0Niw2Ni4wMzgsODAuODEzLDY0Ljc5YzMyLjQyMS0xLjI5NCw0NC42ODEtMjAuOTc5LDgzLjg3OC0yMC45NzkgICBjMzkuMTk2LDAsNTAuMjE1LDIwLjk3OSw4NC41MjQsMjAuMzM1YzM0Ljg4OC0wLjY0OCw1Ni45OTEtMzEuNjk5LDc4LjM0Ny02Mi44OThjMjQuNjk0LTM2LjA4NCwzNC44NjItNzEuMDE5LDM1LjQ2Mi03Mi44MTIgICBDNDYzLjY3OCwzNzUuMjYsMzk2LjQyMiwzNDkuNDk1LDM5NS43NDgsMjcyLjA0NnogTTMzMS4yOCw4MS43NjFDMzQ5LjE0OSw2MC4wODIsMzYxLjIxLDMwLjAwNSwzNTcuOTIsMCAgIGMtMjUuNzM5LDEuMDQ4LTU2LjkzOCwxNy4xNDUtNzUuNDA1LDM4Ljc3NWMtMTYuNTcsMTkuMTg4LTMxLjA3NSw0OS44MTMtMjcuMTg4LDc5LjIxOCAgIEMyODQuMDYxLDEyMC4yMzUsMzEzLjM5MiwxMDMuMzkxLDMzMS4yOCw4MS43NjF6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
            title="Peyara Client for Mac"
          />
          Download for Mac
        </Link>
        <Link
          href="https://github.com/ayonshafiul/peyara-mouse-server/releases/download/v0.0.6/peyara-server_0.0.6_amd64.deb"
          className="download-btn"
        >
          <img
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjgzLjgyOCwzNjguNDU4Yy00MC45NzIsMTkuMDYxLTc5LjA3OSwxOC44NTgtMTA0LjY3LDE3LjAxYy0zMC41MjYtMi4yMDMtNTUuMDc5LTEwLjU2Mi02NS44NzEtMTcuODY1ICAgYy02LjY1LTQuNTAyLTE1LjY5Mi0yLjc2Mi0yMC4xOTUsMy44OTJjLTQuNTAyLDYuNjUxLTIuNzYsMTUuNjkyLDMuODkxLDIwLjE5NGMxNy4zNDksMTEuNzQzLDQ4LjAzNCwyMC40NzgsODAuMDgxLDIyLjc5MSAgIGM1LjQzMywwLjM5MiwxMS4zOTksMC42MzksMTcuODIzLDAuNjM5YzI3Ljg5MSwwLDYzLjMxMy0yLjY1OCwxMDEuMjEtMjAuMjg1YzcuMjgxLTMuMzg5LDEwLjQzOC0xMi4wMzcsNy4wNTEtMTkuMzE5ICAgQzI5OS43NjIsMzY4LjIzLDI5MS4xMTEsMzY1LjA3NiwyODMuODI4LDM2OC40NTh6IE00NDUuNDc1LDM0Ni45MDhjMS4zOTMtMTI2LjM0NCwxNC4zODEtMzY1LjEwMy0yMjcuNDg2LTM0NS44MDYgICBDLTIwLjgxMSwyMC4zMjQsNDIuNTA3LDI3Mi41ODYsMzguOTQ4LDM1Ny4wNzdDMzUuNzk0LDQwMS43NzEsMjAuOTU5LDQ1Ni40MDEsMCw1MTJoNjQuNTUgICBjNi42MzMtMjMuNTYxLDExLjUxMi00Ni44NiwxMy42MTYtNjkuMDc1YzMuODkxLDIuNzE0LDguMDU0LDUuMzM3LDEyLjQ5Nyw3Ljg1MmM3LjIyOSw0LjI1OSwxMy40NDIsOS45MjIsMjAuMDIsMTUuOTE3ICAgYzE1LjM3MiwxNC4wMDksMzIuNzk1LDI5Ljg4Nyw2Ni44NTYsMzEuODc2YzIuMjg2LDAuMTMxLDQuNTg3LDAuMTk1LDYuODM4LDAuMTk1YzM0LjQ0OCwwLDU4LjAwNy0xNS4wNzYsNzYuOTM5LTI3LjE4OSAgIGM5LjA3LTUuODA4LDE2LjkwOC0xMC44MiwyNC4yODEtMTMuMjI4YzIwLjk1NS02LjU2LDM5LjI2Ni0xNy4xNDYsNTIuOTUxLTMwLjYyNmMyLjEzOS0yLjEwNCw0LjEyMS00LjI2OSw1Ljk4LTYuNDc0ICAgYzcuNjIzLDI3LjkzOCwxOC4wNjEsNTkuMzc5LDI5LjY0NSw5MC43NTJINTEyQzQ3OC45MTIsNDYwLjg4OCw0NDQuNzgxLDQxMC44MTIsNDQ1LjQ3NSwzNDYuOTA4eiBNNjIuMDU1LDI3OC4xNzYgICBjMC0wLjAwOCwwLTAuMDE1LTAuMDAxLTAuMDIyYy0yLjM3My00MS4yMywxNy4zNTUtNzUuOTE2LDQ0LjA2My03Ny40NjdjMjYuNzA2LTEuNTUzLDUwLjI4LDMwLjYxNCw1Mi42NTIsNzEuODQ2ICAgYzAsMC4wMDcsMC4wMDIsMC4wMTUsMC4wMDIsMC4wMjFjMC4xMjgsMi4yMjQsMC4xODQsNC40MjUsMC4xODUsNi42MDRjLTguNDYyLDIuMTI4LTE2LjA5Niw1LjIxOC0yMi45MzYsOC44MTMgICBjLTAuMDI2LTAuMzA2LTAuMDQ2LTAuNjA2LTAuMDc2LTAuOTEzYzAtMC4wMDYsMC0wLjAxMSwwLTAuMDE1Yy0yLjI4NS0yMy40MDMtMTQuNzg2LTQxLjA4LTI3LjkyNi0zOS40NzkgICBjLTEzLjE0LDEuNjAyLTIxLjk0LDIxLjg3NS0xOS42NTYsNDUuMjc4YzAsMC4wMDYsMC4wMDIsMC4wMSwwLjAwMiwwLjAxNGMwLjk5NiwxMC4yMDUsMy45MzQsMTkuMzE3LDguMDIxLDI2LjIyMyAgIGMtMS4wMTcsMC44MDItMy44OTIsMi45MDYtNy4yMDMsNS4zMjhjLTIuNDg1LDEuODE2LTUuNTEsNC4wMjktOS4xNTcsNi43MTVDNzAuMDg0LDMxOC4wNzQsNjMuMjcyLDI5OS4zMzEsNjIuMDU1LDI3OC4xNzZ6ICAgIE0zMzIuNjMxLDM4MC4wODljLTAuOTUxLDIxLjc5My0yOS40NTUsNDIuMjk2LTU1Ljc5Miw1MC41MjJsLTAuMTQ3LDAuMDQ4Yy0xMC45NDksMy41NTEtMjAuNzEzLDkuOC0zMS4wNTEsMTYuNDE1ICAgYy0xNy4zNjYsMTEuMTEtMzUuMzIzLDIyLjYwNC02MS4yNjEsMjIuNjA0Yy0xLjcwMiwwLTMuNDQ3LTAuMDUyLTUuMTYzLTAuMTQ2Yy0yMy43NTgtMS4zOTEtMzQuODcxLTExLjUxOC00OC45NC0yNC4zMzggICBjLTcuNDIxLTYuNzY1LTE1LjA5NS0xMy43NTktMjQuOTg4LTE5LjU2MmwtMC4yMTItMC4xMjJjLTIxLjM1My0xMi4wNTItMzQuNjA2LTI3LjA0MS0zNS40NTQtNDAuMDk3ICAgYy0wLjQyMS02LjQ5LDIuNDY5LTEyLjEwOSw4LjU5MS0xNi43YzEzLjMxOC05Ljk4NSwyMi4yMzktMTYuNTExLDI4LjE0Mi0yMC44MjljNi41NTUtNC43OTQsOC41MzQtNi4yMzgsMTAtNy42MzIgICBjMS4wNDgtMC45OTMsMi4xODItMi4wOTQsMy40MDItMy4yODFjMTIuMjIzLTExLjg4NywzMi42OC0zMS43OCw2NC4wNzUtMzEuNzhjMTkuMjAyLDAsNDAuNDQ5LDcuMzk5LDYzLjA4NSwyMS45NTEgICBjMTAuNjYyLDYuOTM4LDE5Ljk0LDEwLjE0MywzMS42ODgsMTQuMTk5YzguMDc4LDIuNzg5LDE3LjIzNCw1Ljk1MSwyOS40OTYsMTEuMjAybDAuMTk5LDAuMDgyICAgQzMxOS43NCwzNTcuMzI1LDMzMy4yNDgsMzY1LjkwNCwzMzIuNjMxLDM4MC4wODl6IE0zMjYuMzIyLDMyOC45MDJjLTIuMTk5LTEuMTA2LTQuNDg2LTIuMTU5LTYuODcxLTMuMTQ0ICAgYy0xMS4wNTMtNC43MjgtMTkuOTE2LTcuOTM3LTI3LjI2OC0xMC40OThjNC4wNTktNy45NDYsNi41OC0xNy44Niw2LjgxMS0yOC42MmMwLTAuMDA3LDAtMC4wMTMsMC0wLjAxNyAgIGMwLjU2Mi0yNi4xODgtMTIuNjQ1LTQ3LjQ0OC0yOS40OTctNDcuNDg4Yy0xNi44NTUtMC4wMzktMzAuOTc1LDIxLjE1Ny0zMS41MzgsNDcuMzQzYzAsMC4wMDQsMCwwLjAwOCwwLDAuMDE0ICAgYy0wLjAxOSwwLjg1Ny0wLjAyMSwxLjcwOC0wLjAxLDIuNTU1Yy0xMC4zODEtNC43NzQtMjAuNTktOC4yNDMtMzAuNTgzLTEwLjM4Yy0wLjA0Ni0wLjk4Mi0wLjEwMi0xLjk2Ni0wLjEyMi0yLjk2ICAgYzAtMC4wMDgsMC0wLjAxOCwwLTAuMDI0Yy0wLjk2OS00Ny43MDYsMjguMzAxLTg3LjE5NSw2NS4zNzctODguMjAxYzM3LjA3NC0xLjAwNyw2Ny45MTQsMzYuODUsNjguODg3LDg0LjU1NSAgIGMwLDAuMDA5LDAsMC4wMiwwLDAuMDI2QzM0MS45NDUsMjkzLjYzNywzMzYuMTc4LDMxMy40OTcsMzI2LjMyMiwzMjguOTAyeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            title="Peyara Client for Linux"
          />
          Download for Linux
        </Link>
      </div>
      <div className="client-image-container">
        <img src="/img/client-logo.png" className="client-image" />
      </div>
      <div className="download-btn-container">
        <Link
          href={
            "https://play.google.com/store/apps/details?id=io.github.ayonshafiul.peyara"
          }
        >
          <img src="/img/google-play.png" />
        </Link>
        <Link href={"#"} className="disabled">
          <img src="/img/appstore.png" />
        </Link>
      </div>
    </div>
  );
}
